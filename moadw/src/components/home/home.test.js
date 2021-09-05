import Home from '.';
import { renderHook, act } from '@testing-library/react-hooks'



let HomeResult;
describe("dono card hook",()=>{
    beforeEach(()=>{
        HomeResult = renderHook(()=>Home());
    })

    it("Render correctly",()=>{
        console.log(Home);
    });


});