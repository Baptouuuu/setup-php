# Setup PHP action

This action will setup the PHP and Composer binary on the runner

## Inputs

### `version`

**Required**: The PHP version you want to install. Default `7.3`, supported: `7.1`, `7.2` and `7.3`

## Example usage

```yaml
name: My Workflow
on: [push]
jobs:
    test:
        runs-on: ${{ matrix.operating-system }}
        strategy:
            matrix:
                operating-system: ['macOS-latest', 'ubuntu-latest']
                version: ['7.1', '7.2', '7.3']
        steps:
            - uses: actions/checkout@v1
            -
                name: Setup
                uses: baptouuuu/setup-php@1.0.0
                with:
                    version: ${{ matrix.version }}
            -
                name: Display PHP Version
                run: 'php -v'

```

**Note**: Only `ubuntu` and `macOS` are supported for now.
