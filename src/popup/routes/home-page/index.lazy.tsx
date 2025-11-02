import { ReactElement, useEffect, useState } from 'react';

import { useSnackbar } from 'notistack';

import { Button, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import { createLazyFileRoute } from '@tanstack/react-router';

import { ChromeApiWrapper, ChromeMessage, ChromeMessageType } from '@/common/chrome-api-wrapper';
import { ScraperCommand, ScraperMessage } from '@/common/types/scraper';
import PopupContent from '@/popup/modules/core/components/PopupContent/PopupContent';
import PopupHeader from '@/popup/modules/core/components/PopupHeader/PopupHeader';

const CACHE_KEY = 'scrapedPageTitle';

function HomePage(): ReactElement {
    const { enqueueSnackbar } = useSnackbar();

    const [scrapedPageTitle, setScrapedPageTitle] = useState<string>('');
    const [disableScrapeButton, setDisableScrapeButton] = useState<boolean>(false);

    async function scrape() {
        setDisableScrapeButton(true);

        const message: ChromeMessage<ScraperMessage> = {
            type: ChromeMessageType.SCRAPER_COMMAND,
            payload: { command: ScraperCommand.SCRAPE }
        };

        try {
            await ChromeApiWrapper.sendTabMessage(message);
        } catch (e) {
            console.error(e);
            enqueueSnackbar('Failed to scrape page title. Please check console logs.', {
                variant: 'error'
            });

            setDisableScrapeButton(false);
        }
    }

    useEffect(() => {
        chrome.storage.session.get(CACHE_KEY).then(items => {
            const cachedTitle = items[CACHE_KEY];
            setScrapedPageTitle(cachedTitle ?? '');
        });

        const messageListener = (message: ChromeMessage<string>) => {
            if (message.type !== ChromeMessageType.SCRAPING_RESULTS) {
                return false;
            }

            chrome.storage.session.set({ [CACHE_KEY]: message.payload });
            setScrapedPageTitle(message.payload);
            setDisableScrapeButton(false);
            return false;
        };

        chrome.runtime.onMessage.addListener(messageListener);

        return () => {
            chrome.runtime.onMessage.removeListener(messageListener);
        };
    }, []);

    return (
        <>
            <PopupHeader />
            <PopupContent>
                <Stack alignItems="center" spacing={1}>
                    <Box alignItems="center">
                        <h1>My Chromium extension</h1>
                    </Box>

                    <p>
                        <strong>Scraped title:</strong> {scrapedPageTitle}
                    </p>

                    <Button
                        className="scrape-button"
                        variant="contained"
                        disabled={disableScrapeButton}
                        onClick={scrape}
                    >
                        Scrape page title
                    </Button>
                </Stack>
            </PopupContent>
        </>
    );
}

export const Route = createLazyFileRoute('/home-page/')({
    component: HomePage
});
