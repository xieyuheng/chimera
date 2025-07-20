# Chimera

## Usages

### Command line tool

Install it by the following command:

```sh
npm install -g @xieyuheng/chimera
```

The command-line program is called `chimera`.

```sh
chimera help                # Print help message
chimera repl                # Open an interactive REPL
chimera run <file>          # Run a file
chimera run <file> --watch  # Run and watch file change
```

## Development

```sh
npm install           # Install dependencies
npm run build         # Compile `src/` to `lib/`
npm run build:watch   # Watch the compilation
npm run format        # Format the code
npm run test          # Run test
```

## Thanks

Thank you, [Daniel P. Friedman](https://www.cs.indiana.edu/~dfried), [William E. Byrd](http://webyrd.net), [Oleg Kiselyov](https://okmij.org/ftp/) and [Jason Hemann](https://jasonhemann.github.io/),
for your book ["The Reasoned Schemer"](https://mitpress.mit.edu/9780262535519/the-reasoned-schemer/).

Thank you, [Bharathi Ramana Joshi](https://bharathi.xyz/) and [William E. Byrd](http://webyrd.net),
for writing [a great tutorial](docs/papers/an-annotated-implementation-of-minikanren-with-constraints.pdf) about implementing constraint logic programming.

## License

[GPLv3](LICENSE)
