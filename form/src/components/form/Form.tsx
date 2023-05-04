import React, { FormEvent, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import "./Form.css";

const Form = () => {
   const { register, handleSubmit } = useForm();

   const [person, setPerson] = useState({ name: "", age: 0 });

   const onSubmit = (data: FieldValues) => {
      console.log(data);
   };

   return (
      <form className="" onSubmit={handleSubmit(onSubmit)}>
         <div className="mb-3">
            <div>
               <p>Name</p>
               <input
                  id="name"
                  type="text"
                  className="form-control"
                  {...register("name")}
                  value={person.name}
               />
            </div>
            <div>
               <p>Age</p>
               <input
                  id="name"
                  type="text"
                  className="form-control"
                  {...register("age")}
                  value={person.age}
               />
            </div>
         </div>
         <br />
         <button className="btn-btn primary">Submit</button>
      </form>
   );
};

export default Form;
