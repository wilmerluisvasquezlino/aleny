<script lang="ts">
	import SetTheme from "../SetTheme.svelte";
import Cita from "./Cita.svelte";
import Code from "./Code.svelte";
	import Image from "./Image.svelte";
	import Paragraph from "./Paragraph.svelte";
	import Terminal from "./Terminal.svelte";
	import Title from "./Title.svelte";

  export let text = "";
  
  
    const rules = [
      {
        pattern: /\[([a-zA-Z]+)\]\s+/,
        onPattern(res: RegExpExecArray, rest: string) {
          return { type: `CITA`, name: res[1], text: rest };
        },
      },
      {
        pattern: /T([0-9]):\s+/,
        onPattern(res: RegExpExecArray, text: string) {
          return { type: `TITLE`, size: parseInt(res[1]), text };
        }, 
      },
      {
        pattern: /Img:\s+/,
        onPattern(res: RegExpExecArray, src: string) {
          return { type: `IMAGE`, src };
        },
      },
      {
        pattern: /P:\s+/,
        onPattern(res: RegExpExecArray, text: string) {
          return { type: `PARAGRAPH`, text };
        },
      },
      {
        pattern: /\$\s+/,
        onPattern(res: RegExpExecArray, text: string) {
          return { type: `TERMINAL`, text };
        },
      },
      {
        pattern: /Code:\s+/,
        onPattern(res: RegExpExecArray, text: string) {
          const [fileName,...code] = text.split("\n");
  
          const codeX = code.map((line:string)=>{
  
            line = line.replace(/^\s\s/,"")
            const r = /^(\s\s)+/.exec(line)
            let f = ""
            if (r) {
              let indent = r[0].replaceAll("  ",'<span class="indent">&nbsp;&nbsp;</span>')
              f = line.slice(r[0].length)
              return `${indent}${f}`
            }
            return line
          })
  
          return { type: `CODE`,fileName, text:codeX.join("\n") };
        },
      },
    ];
      
    interface MarkBookTypes {
      type: string;
      fileName: string | null
      text: string
      src: string
      name: string
      size: number
    }
    function mdxcompile(markBook: string):MarkBookTypes[] {
      let groupIndent = markBook
        .trim()
        .split(/\n(?=[^ ])/)
        .filter((m) => m !== "")
        .map((m) => m.trim());
  
      return groupIndent
        .map((text) => {
          for (const { pattern, onPattern } of rules) {
            const reg = new RegExp(pattern, "d");
            const re = reg.exec(text);
            if (re) {
              const er = onPattern(re, text.slice(re[0].length));
              return er;
            }
          }
        })
        .filter((m) => m !== undefined);
    }
    let dfb = mdxcompile(text);
  
  </script>
  <div class="document flex flex-col gap-2 p-5 w-full max-w-2xl">
    <SetTheme/>
    {#each dfb as cv}
      {#if cv.type === "TITLE"}
        <Title text={cv.text} size={cv.size}/>
      {:else if cv.type == "PARAGRAPH"}
        <Paragraph text={cv.text}/>
      {:else if cv.type == "CODE"}
        <Code fileName={cv.fileName} text={cv.text}/>
      {:else if cv.type === "CITA"}
        <Cita text={cv.text} name={cv.name}/>
      {:else if cv.type === "IMAGE"}
        <Image src={cv.src}/>
      {:else if cv.type === "TERMINAL"}
        <Terminal text={cv.text}/>
      {/if}
    {/each}
    
  </div>
  <style>
    
  </style>