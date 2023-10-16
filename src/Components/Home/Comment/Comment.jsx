import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Comment = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data)
        reset()
    }
    const notify = () => toast("Thanks for your valuable Comment");
    return (
        <div className="w-5/6 mx-auto">

            <h1 className="text-4xl text-center divider w-5/6 mx-auto font-bold py-12">Connect with me...</h1>

            <div className="w-2/3">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" {...register("name", { required: true, minLength: 5, maxLength: 20 })} placeholder="Please Enter Your Name" className="input input-bordered" />
                        {errors.name && <span className="text-red-600">Name is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name="email" {...register("email", { required: true })} placeholder="Please Enter Your Email" className="input input-bordered" />
                        {errors.email && <span className="text-red-600">Email is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Comment</span>
                        </label>
                        <textarea name="comment" {...register("comment", { required: true })} className="textarea textarea-bordered" placeholder="Keep Going..."></textarea>
                        {/* <input type="text" name="comment" {...register("comment", { required: true })} placeholder="Enter Your Photo" className="input input-bordered" /> */}
                        {errors.comment && <span className="text-red-600">Comment is required</span>}
                    </div>

                    <div className="form-control mt-6 w-1/6 justify-end">
                        <input onClick={notify} className="btn btn-primary mb-2" type="submit" value="Comment" />
                        <ToastContainer />

                    </div>
                </form>
            </div>

        </div>
    );
};

export default Comment;