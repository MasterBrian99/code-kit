<script>
  import Sidebar from "../components/common/Sidebar/Sidebar.svelte";

</script>

<main class="w-full h-full flex">
    <Sidebar/>
    <div class="w-full ">
        <div class="fixed bg-purple-400 w-full h-16 ml-48">
            header
        </div>
        <div class="mt-16 ml-48" >

            <slot></slot>
        </div>

    </div>

</main>
