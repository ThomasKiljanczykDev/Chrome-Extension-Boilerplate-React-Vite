// @ts-check
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';

import eslint from '@eslint/js';

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    eslintPluginReact.configs.flat.recommended,
    eslintPluginReact.configs.flat['jsx-runtime'],
    eslintPluginReactHooks.configs.flat.recommended,
    eslintConfigPrettier,
    {
        settings: {
            react: {
                version: 'detect'
            }
        },
        rules: {
            'react/jsx-no-bind': 'warn',
            'react/no-unstable-nested-components': 'warn'
        }
    },
    {
        ignores: ['dist', 'node_modules', '.yarn']
    }
);
