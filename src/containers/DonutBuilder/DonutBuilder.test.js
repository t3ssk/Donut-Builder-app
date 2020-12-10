import {DonutBuilder} from './DonutBuilder'
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {DonutControls} from '../../components/Donut/DonutControls/DonutControls'
configure({adapter: new Adapter()})

describe ('<DonutBuilder/>', ()=>{
    let wrapper
    beforeEach(()=>{
        wrapper= shallow(<DonutBuilder/>)
    })
    it('obsahuje donut ingredience', ()=>{
        expect(wrapper.find(DonutControls)).toBeTruthy()
    })
})