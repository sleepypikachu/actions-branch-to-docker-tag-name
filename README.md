# actions-branch-to-docker-tag-name
[GitHub Action](https://github.com/features/actions) to convert a branch name to a valid docker tag name

If the branch is your `main` branch then `latest` will be returned.

## Example
```yaml
- uses: sleepypikachu/actions-branch-to-docker-tag-name@v1
  id: branch-to-docker-tag
  with:
   branch: "feature/some-branch-name"
   prefix: "feature/"
```


