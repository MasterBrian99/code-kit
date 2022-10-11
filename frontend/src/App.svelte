<script lang="ts">
  import { Router, Route, Link } from "svelte-navigator";
  import MainLayout from "./layout/MainLayout.svelte";
  import DashboardScreen from "./screens/DashboardScreen/DashboardScreen.svelte";
  import HomeScreen from "./screens/HomeScreen/HomeScreen.svelte";
</script>

<Router>

  <MainLayout>
    <main class="w-full h-full  bg-green-200 min-h-screen">
      <Route path="/">
        <HomeScreen />
      </Route>
  
      <Route path="dashboard">
        <DashboardScreen />
      </Route>
    </main>

    
  </MainLayout>
 
</Router>

<style>
</style>
