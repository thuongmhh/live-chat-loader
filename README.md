
# Live Chat Loader

A minimal, lightweight, and plain JavaScript that mitigates the negative performance and user experience impact of chat tools. It shows a fake widget until users are ready to interact with chat.


## Usage

#### HelpScout Beacon v2

```html
<script src="helpscout.min.js" async
    data-color="" data-icon=""
    data-z-index="" data-horizontal-position=""
    data-beacon-id="">
</script>
```

| Parameter | Type     | Description                | Default          |
| :-------- | :------- | :------------------------- | :--------------- |
| `data-beacon-id` | `string` | **Required**. Beacon ID | |
| `data-color` | `string` | Brand color for your Beacon  | `#527ceb` |
| `data-icon` | `string` | Customize the icon shown in your Beacon. Valid values are `message`, `antenna`, `search`, `question`, and `beacon` | `message` |
| `data-horizontal-position` | `string` | Puts your Beacon on the bottom left or bottom right of the page. Valid values are `left` or `right`  | `right` |
| `data-z-index` | `number` | Update this to change the default z-index of the Beacon  | `1050` |
