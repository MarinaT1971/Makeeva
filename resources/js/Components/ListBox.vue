<template>
    <Listbox v-model="selectedPerson"
    v-slot="{ open }"
    >
        <ListboxButton
          class="relative h-full w-full p-4 cursor-default rounded-lg bg-white text-left font-['Onest_Regular'] text-gray-110 flex justify-between items-center"
        >
          <span class="block truncate">{{ selectedPerson.name }}</span>
          <span
              :class="open ? 'rotate-180 transform' : ''"
              >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 9L12 16L5 9" stroke="#A3A7AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              </span>
        </ListboxButton>

        <transition
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <ListboxOptions
            class="absolute mt-1 max-h-60 w-[254px] overflow-auto rounded-lg border border-gray-110 py-1 text-gray-110 shadow-[0_4px_8px_0px_rgba(51, 51, 51, 0.08)] ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <ListboxOption
              v-slot="{ active, selected }"
              v-for="person in people"
              :key="person.name"
              :value="person"
              as="template"
            >
              <li
                :class="[
                  active ? 'bg-blue-160' : '',
                  'relative cursor-default select-none p-2',
                ]"
              >
                <span
                  :class="[
                    selected ? 'font-medium' : 'font-normal',
                    'block truncate',
                  ]"
                  >{{ person.name }}</span
                >
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
    </Listbox>
</template>

<script setup>
import { ref } from 'vue'
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'

const people = [
  { name: 'Курс' },
  { name: 'Place holder' },
  { name: 'Place holder' },
]
const selectedPerson = ref(people[0])
</script>

<script>
export default {
  components:{
  },
 
  props:{
     
  },
}
</script>
