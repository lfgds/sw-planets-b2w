import { shallowMount } from '@vue/test-utils'
import Planets from '@/views/Planets.vue'

describe('Planets', () => {
  const wrapper = shallowMount(Planets)

  it('has a button', () => {
    wrapper.find("button").trigger("click");
  })
})
