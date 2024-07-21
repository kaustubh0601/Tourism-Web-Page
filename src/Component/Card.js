import React from "react";
import {FcLike, FcLikePlaceholder} from "react-icons/fc";
import { toast } from "react-toastify";

const Card =(props) => {

    let course = props.course;

    let linkedCourses = props.linkedCourses;
    let setLinkedCourse = props.setLinkedCourse;

    function clickHandler() {
        
        if(linkedCourses.includes(course.id)) {
            // already linked
            setLinkedCourse( (prev) => prev.filter( (cid) => (cid !== course.id) ) );
            toast.warning("like removed");
         }
        else {
            // not linked before
            // do insert in linked courses 
            if(linkedCourses.length === 0) {
                setLinkedCourse( [course.id]);
             }
            else {
                // non-empty pehle se
                setLinkedCourse((prev) => [...prev, course.id]);
            } 

            toast.success("Linked Successfully");
        } 

    }

    return(
        <div className="w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden">
            <div className="relative ">
               { /*eslint-disable-next-line jsx-a11y/alt-text*/ }
                <img src={course.image.url}></img>

                <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-13px] grid place-items-center"> 
                    <button onClick={clickHandler}>
                        {
                            linkedCourses.includes(course.id) ? (<FcLike fontSize="1.75rem"/>) :  (<FcLikePlaceholder fontSize="1.75rem" />)
                        }
                            
                    </button>
                   
                </div>

            </div>

            <div className="p-4 ">
                <p className="text-white font-semibolt text-lg leading-6">{course.title}</p>
                <p className="mt-2 text-white">
                        {
                            course.description.length > 100 ? 
                            (course.description.substr(0,100)) + "..." :
                            (course.description)
                        }
                </p>

            </div>


        </div>
    );
}


export default Card;  