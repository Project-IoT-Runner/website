<script lang="ts">
	import '../app.css';
	import * as Resizable from "$lib/components/ui/resizable/";
	let { children } = $props();
</script>


<Resizable.PaneGroup
  direction="vertical"
  class="min-h-screen max-w-full"
>
  <Resizable.Pane defaultSize={10}>
    <div class="flex h-full bg-emerald-950 p-6">
      <span class="font-semibold text-white">Header</span>
    </div>
  </Resizable.Pane>
  <Resizable.Handle />
  <Resizable.Pane defaultSize={90}>
    <div class="flex h-full p-6">
      <span class="font-semibold">{@render children()}</span>
    </div>
  </Resizable.Pane>
</Resizable.PaneGroup>
  

