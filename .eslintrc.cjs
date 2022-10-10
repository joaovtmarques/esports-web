module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['plugin:react/recommended'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint', 'import', 'prettier'],
	rules: {
		'import/prefer-default-export': 'off',
		'react/state-in-constructor': 'off',
		'react/static-property-placement': 'off',
		'react/jsx-props-no-spreading': 'off',
		'react/prop-types': 'off',
		semi: [2, 'always'],
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
				jsx: 'never',
				ts: 'never',
				tsx: 'never',
			},
		],
		'prettier/prettier': ['error'],
		'react/react-in-jsx-scope': 'off',
		'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
		'import/no-unresolved': 'error',
		'@typescript-eslint/no-use-before-define': 'off',
		useTabs: true,
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.tsx', '.ts'],
				moduleDirectory: ['node_modules', 'src/'],
			},
			typescript: {},
		},
	},
};
