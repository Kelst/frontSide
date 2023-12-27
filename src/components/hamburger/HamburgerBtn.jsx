import React from 'react'

export default function HamburgerBtn() {
  return (
<div
    class="group flex h-20 w-20 cursor-pointer items-center justify-center rounded-3xl bg-white p-2 hover:bg-slate-200">
    <div class="space-y-2">
        <span class="block h-1 w-10 origin-center rounded-full bg-red-500 transition-transform ease-in-out group-hover:translate-y-1.5 group-hover:rotate-45"></span>
        <span class="block h-1 w-8 origin-center rounded-full bg-black transition-transform ease-in-out group-hover:w-10 group-hover:-translate-y-1.5 group-hover:-rotate-45"></span>
    </div>
</div>
  )
}
