# actions-path-to-docker-image-name
[GitHub Action](https://github.com/features/actions) to convert a directory path to a valid name.

## Example
```yaml
- uses: sleepypikachu/actions-path-to-docker-image-name@v1
  id: path-to-docker-image
  with:
   path: "./docker/foo/bar"
   prefix: "./docker"
```


