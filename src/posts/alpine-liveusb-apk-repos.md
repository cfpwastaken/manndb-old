---
title: Configuring apk repositories on alpine Live USB
date: 12.9.2023
published: true
author: Jannik
---

<script>
  import Command from "$lib/components/Command.svelte";
  import PostPreview from "$lib/components/PostPreview.svelte";
</script>

In the /etc/apk/repositories file you can configure the repositories that apk uses to install packages. On the Alpine Linux Live USB there are no repositories configured by default, so you have to configure them yourself (the file is empty).

This is the default repositories file on a normal Alpine Linux installation:

```bash
https://dl-cdn.alpinelinux.org/alpine/v3.16/main
https://dl-cdn.alpinelinux.org/alpine/v3.16/community
```

You can simply copy these lines into the repositories file, but you should change the version number to the version of the Alpine Linux Live USB you are using.