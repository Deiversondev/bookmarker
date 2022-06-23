import {useFormik} from 'formik'


const Form = () => {

const formik = useFormik({
    initialValues: {
        name:'',
        startDate:'',
        numberOfPages:'',
        finished:'false',
        bookMark:''
    }, onSubmit: values =>{
        console.log(values)
        formik.resetForm()
    }
})


    return(
        <div>
                <form onSubmit={formik.handleSubmit}>
        <div>
                <label htmlFor="" >Name</label>
                <input type="text" name='name' id='name' onChange={formik.handleChange} value={formik.values.name}/>
        </div>
        <div>
                <label htmlFor=""></label><input type="text" id='startDate' onChange={formik.handleChange} value={formik.values.startDate} />
        </div>
        <div>
                <label htmlFor=""></label><input type="text" id='numberOfPages' onChange={formik.handleChange} value={formik.values.numberOfPages} />
        </div>
        <div>
                <label htmlFor=""></label><input type="text" id='finished' onChange={formik.handleChange} value={formik.values.finished} />
        </div>
        <div>
                <label htmlFor=""></label><input type="text" onChange={formik.handleChange}  id='bookMark' value={formik.values.bookMark} />
        </div>

        <button type="submit">Save</button>
                </form>
        </div>
    )
}

export default Form