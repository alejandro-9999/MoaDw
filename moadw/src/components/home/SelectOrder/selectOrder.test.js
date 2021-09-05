import SelectOrder from '.';
import { renderHook, act } from '@testing-library/react-hooks'



let SelectOrderResult;
describe("dono card hook",()=>{
    beforeEach(()=>{
        SelectOrderResult = renderHook(()=>SelectOrder());
    })

    it("Render correctly",()=>{
        console.log(SelectOrder);
    });


});