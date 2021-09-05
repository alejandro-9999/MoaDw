import DonorCard from ".";
import { renderHook, act } from '@testing-library/react-hooks'



let DonorCardResult;
describe("dono card hook",()=>{
    beforeEach(()=>{
        DonorCardResult = renderHook(()=>DonorCard());
    })

    it("Render correctly",()=>{
        console.log(DonorCard);
    });
});