<script lang="ts">
  const ty:string[] = [
    "06:30",
    "07:15",
    "08:00",
    "08:45",
    "09:30",
    "10:15",
    "11:00",
    "11:45",
    "12:30",
    "13:15",
    "14:00",
    "14:45",
    "15:30",
    "16:15",
    "17:00",
    "17:45",
    "18:30",
    "19:15",
    "20:00",
    "20:45"
  ]
  const sch:any[] = []
  function add(curso:string,day:number,start: string,time:any) {
    let index = ty.indexOf(start);
    sch.push({curso,day:day+1,start: index+1,time: index+time+1})
  }
  add("Matemática Básica I",1,"08:45",3)
  add("Métodos y Técnicas de Estudio",2,"07:15",3)
  add("Introdución a la Ingeniería de Sistemas e Informática",2,"16:15",3)
  add("Lenguaje I",3,"06:30",2)
  add("Métodos y Técnicas de Estudio",3,"10:15",1)

  add("Psicología General",4,"08:00",3)
  add("Matemática Básica I",4,"10:15",3)
  add("Taller de Dibujo y Pintura",4,"15:30",3)
  add("Ética y Liderazgo",5,"08:45",3)
  add("Lenguaje I",5,"11:00",3)

</script>
<div class="">
  <div class="schedule p-2 gap-2">
    {#each ty as m,i}
      {#if ty[i+1] !== undefined}
        <div class="flex items-center text-xs gap-2 rounded-lg p-1 px-2 bg-content-100 dark:bg-content-800" style:grid-column="1/2" style:grid-row="{i+1}/{i+2}">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><g fill="none" class="stroke-slate-700 dark:stroke-gray-200" stroke-linecap="round" stroke-width="1.5"><path stroke-linejoin="round" d="M12 8v4l2.5 2.5"/><path d="M7 3.338A9.954 9.954 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"/></g></svg>
          {m}&nbsp;-&nbsp;{ty[i+1]}
        </div>
      {/if}
      
    {/each}
    {#each sch as {curso,day,start,time}}
      <div class="card flex gap-2 rounded-lg p-1 pr-3 pb-3 bg-content-100 dark:bg-content-800" style:grid-column="{day}/{day}" style:grid-row="{start}/{time}">
        <div class="line w-1 h-6 flex-shrink-0 self-center bg-sky-300 rounded-full"></div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm text-sky-500 dark:text-sky-300 font-bold">{curso}</h3>
          <div class="flex items-center text-xs gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><g fill="none" class="stroke-slate-700 dark:stroke-gray-200" stroke-linecap="round" stroke-width="1.5"><path stroke-linejoin="round" d="M12 8v4l2.5 2.5"/><path d="M7 3.338A9.954 9.954 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"/></g></svg>
            {ty[start-1]} - {ty[time-1]}
          </div>
          <div class="flex items-center text-xs gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><g fill="none" class="stroke-slate-700 dark:stroke-gray-200" stroke-linecap="round" stroke-width="1.5"><path d="M12.5 7.041A3 3 0 1 0 14.959 9.5"/><path d="M5 15.216c-.647-1.654-1-3.415-1-5.073C4 5.646 7.582 2 12 2s8 3.646 8 8.143c0 4.462-2.553 9.67-6.537 11.531a3.45 3.45 0 0 1-2.926 0C9.265 21.08 8.138 20.144 7.194 19"/></g></svg>
            P-306
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>
<style>
  .schedule{
    display: grid;
    grid-template-columns: auto 1fr 1fr 1fr 1fr 1fr;
  }
 
</style>