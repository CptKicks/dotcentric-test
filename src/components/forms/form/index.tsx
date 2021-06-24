import { ComponentChildren, FunctionalComponent, h, toChildArray } from 'preact';
import { useForm } from 'react-hook-form';

interface Props {
    defaultValues?: Record<string, any>;
    children: ComponentChildren[];
    onSubmit: (data: object, e?: Event) => void;
}

const Form: FunctionalComponent<Props> = ({ defaultValues, children, onSubmit }) => {
    const methods = useForm({ defaultValues });
    const { handleSubmit } = methods;
    const submitHandler = (data: any) => {
        console.log('asdfadf');
        onSubmit(data);
    };

    return (
        <form onSubmit={handleSubmit(submitHandler)}>
            {toChildArray(children).map( (child: any) => {
                return child.props.name
                    ? h(child.type, {
                        ...{
                            ...child.props,
                            register: methods.register,
                            key: child.props.name,
                            error: methods.formState.errors[child.props.name]
                        }
                    })
                    : child;
            })}
        </form>
    );
}

export default Form;
