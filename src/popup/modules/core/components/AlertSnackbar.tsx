import { Ref, useCallback, useMemo } from 'react';

import { CustomContentProps, SnackbarContent, useSnackbar } from 'notistack';

import { Alert, AlertColor } from '@mui/material';

function AlertSnackbar({
    className,
    id,
    message,
    variant,
    ref
}: CustomContentProps & {
    ref: Ref<HTMLDivElement>;
}) {
    const { closeSnackbar } = useSnackbar();

    const severity = useMemo<AlertColor>(() => {
        switch (variant) {
            case 'success':
                return 'success';
            case 'error':
                return 'error';
            case 'warning':
                return 'warning';
            case 'info':
                return 'info';
            case 'default':
            default:
                return 'info';
        }
    }, [variant]);

    const handleAlertClose = useCallback(() => closeSnackbar(id), [closeSnackbar, id]);

    return (
        <SnackbarContent ref={ref}>
            <Alert
                className={className}
                severity={severity}
                style={{
                    width: '100%'
                }}
                onClose={handleAlertClose}
            >
                {message}
            </Alert>
        </SnackbarContent>
    );
}

export default AlertSnackbar;
