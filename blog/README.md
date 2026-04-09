# Blog
Tailwind need watchman  
Need a `flake.nix` with devshell and serve

## Build

```bash
# Re-generate css
tailwindcss -i static/css/style.css -o static/css/tailwind.css

# Build blog
zola build
```

## Dev

```bash
# Serve blog
zola serve

# Watch css
tailwindcss -i static/css/style.css -o static/css/tailwind.css
```
