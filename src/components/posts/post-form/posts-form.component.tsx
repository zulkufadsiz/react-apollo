import React from 'react';
import {useForm,SubmitHandler} from "react-hook-form";
import {useCreatePost} from "../../../hooks/posts/useCreatePost";

interface FormData {
    title: string;
    body: string;
}

const PostForm: React.FC = () => {
    const { register,handleSubmit } = useForm<FormData>();
    const createPost = useCreatePost();
    const onSubmit:SubmitHandler<FormData> = ({title,body}) => {
        createPost({variables:{input:{title,body}}});
    };
    return <div className='posts-form'>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register("title")} />
            <input {...register("body")} type="textarea"/>
            <input type="submit" />
        </form>
    </div>
}

export default PostForm;
