import {NavLink} from "react-router-dom"

const Nav = () => {
  return (

    <div className="mt-10 flex justify-center gap-10">
        
       <NavLink style={(e)=>{
        return{
            color:e.isActive?"tomato":"black",
            textDecoration:e.isActive?"underline":"" //using style props

        }
       }} to="/">Home</NavLink>



       <NavLink className={(e)=>{
        return [
            e.isActive? "text-red-300 underline": ""  //using className(tailwind)
        ].join(" ")
       }} to="/about">About</NavLink>




       <NavLink  to="contact">
        {
            (e)=>{
                return <span
                className={[
                    e.isActive? "text-red-300 underline": ""  //using third method
                ].join(" ")}
                >Contact</span>
            }
        }
       </NavLink>
       

    </div>

  )
}

export default Nav