<script lang="ts">
  import duokit from "duokit";
  import {getRandom} from "duokit";
  import Hexagono from '../../../components/Hexagono.svelte';
  import Editor from '../../../components/editor/Editor.svelte';
	import Schedule from "../../../components/calendar/schedule.svelte";
  console.log(duokit());
  console.log(12)
  console.log(getRandom(12))
</script>
<Schedule/>
<style>

</style>