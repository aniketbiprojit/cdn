## Free-Form CDN

The submodule get populated into public/cdn-source.
Submodule = https://github.com/aniketbiprojit/cdn-source
The CI run on submodule that generates a manifest.json on every run.

A VCS based CDN system.

Uses a submodule to reduce load on on-going development by separating deps to a separate submodule.

The build script is present at ./prebuild.sh

The manifest looks like:

```json
{
  "name": "./files",
  "files": [{ "name": "./files/added-file.txt", "versions": ["740539e"] }],
  "folders": [
    {
      "name": "./files/folder",
      "files": [
        { "name": "./files/folder/another-file.txt", "versions": ["740539e"] }
      ],
      "folders": [
        {
          "name": "./files/folder/another-folder",
          "files": [
            {
              "name": "./files/folder/another-folder/nested-file.txt",
              "versions": ["740539e"]
            }
          ],
          "folders": []
        }
      ]
    }
  ]
}
```
