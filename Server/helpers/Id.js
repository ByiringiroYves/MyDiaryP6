/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */





class Id{
    async Idgenerator(){
    let randomNumber = 'xxx-xxx-xxx'.replace(/[x]/g, () => {
        return (Math.random() * 9 | 0).toString();
    });    
    }
}
export default new Id(); 