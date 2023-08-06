import { useForm } from "react-hook-form";

const Form = () => {

    const { register, trigger, formState: { errors } } = useForm();

    const inputStyles = `mt-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white placeholder:opacity-90`;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onSubmit = async (event: any) => {
        const isValid = await trigger();
        !isValid && event.preventDefault();
    };

    return (
        <form
            target="_blank"
            onSubmit={onSubmit}
            method="POST"
        >
            <input
                className={inputStyles}
                type="text"
                placeholder="Name"
                {...register("name", {
                    required: true,
                    maxLength: 100,
                })}
            />
            {errors.name && (
                <p className="mt-1 text-primary-500">
                    {errors.name.type === "required" && "This field is required."}
                    {errors.name.type === "maxLength" &&
                        "Max length is 100 char."}
                </p>
            )}
            <input
                className={inputStyles}
                type="text"
                placeholder="Email"
                {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
            />
            {errors.email && (
                <p className="mt-1 text-primary-500">
                    {errors.email.type === "required" &&
                        "This field is required."}
                    {errors.email.type === "pattern" && "Invalid email address."}
                </p>
            )}
            <textarea
                className={inputStyles}
                placeholder="Message"
                rows={4}
                cols={50}
                {...register("message", {
                    required: true,
                    maxLength: 2000,
                })}
            />
            {errors.message && (
                <p className="mt-1 text-primary-500">
                    {errors.message.type === "required" &&
                        "This field is required."}
                    {errors.message.type === "maxLength" &&
                        "Max length is 2000 char."}
                </p>
            )}
            <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
            >
                Contact Us
            </button>
        </form>
    )
};

export default Form;
