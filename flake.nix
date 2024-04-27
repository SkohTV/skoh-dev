{
  outputs = { self, nixpkgs }:
    let
      allSystems = [
        "x86_64-linux" # 64-bit Intel/AMD Linux
        "aarch64-linux" # 64-bit ARM Linux
        "x86_64-darwin" # 64-bit Intel macOS
        "aarch64-darwin" # 64-bit ARM macOS
      ];

      # Helper to provide system-specific attributes
      forAllSystems = f: nixpkgs.lib.genAttrs allSystems (system: f {
        pkgs = import nixpkgs { inherit system; };
      });
    in
    {
      devShells = forAllSystems ({ pkgs }: {

        # skoh.dev, with python flask (trying to switch to mojo)
        apex = pkgs.mkShell {
          name = "apex";
          package = [(pkgs.python312.withPackages (ps: with ps; [
            virtualenv
            pip
          ]))];
        };

        # api.skoh.dev, with rust
        api = pkgs.mkShell {
          name = "api";
          package = [];
        };

        # blog.skoh.dev, with hugo
        blog = pkgs.mkShell {
          name = "blog";
          package = [ pkgs.hugo ];
        };

        # php.skoh.dev, with php / apache
        php = pkgs.mkShell {
          name = "php";
          package = [];
        };
      });
    };
}
