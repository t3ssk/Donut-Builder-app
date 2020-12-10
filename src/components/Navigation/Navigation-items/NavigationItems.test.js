import React from 'react'
import {configure, shallow, setProps} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {NavigationItems} from './NavgationItems'
import {NavigationItem} from './NavigationItem/NavigationItem'

configure({adapter: new Adapter()});

describe('<NavigationItems/>', ()=>{
let wrapper
beforeEach(() =>{
    wrapper = shallow(<NavigationItems/>)
})
    it('by měl obsahovat 3 elementy, pokud není objednávka', ()=>{
        expect(wrapper.find(NavigationItem)).toHaveLength(3)
    })
    it('by měl obsahovat 4 elementy, pokud je objednávka', ()=>{
        wrapper.setProps({order: true})
        expect(wrapper.find(NavigationItem)).toHaveLength(4)
    })
    it('obsahuje 3 elementy, pokud není authenticated', ()=>{
        expect(wrapper.find(NavigationItem)).toHaveLength(3)
    })
    it('obsahuje 3 elementy, pokud je authenticated a není order', ()=>{
        wrapper.setProps({token: true})
        expect(wrapper.find(NavigationItem)).toHaveLength(3)
    })
    it('obsahuje 4 elementy, pokud je authenticated a má objednávku', ()=>{
        wrapper.setProps({order: true, token: true})
        expect(wrapper.find(NavigationItem)).toHaveLength(4)
    })
})
