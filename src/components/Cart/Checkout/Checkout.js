import { useContext, useState } from "react"
import { useForm } from 'react-hook-form';

import { collection, addDoc, getFirestore } from "firebase/firestore";

import { countryListAllIsoData } from "../../../assets/data/countries"
import { CartContext } from "../../../context/cartContext";
import InputCheckout from "./InputCheckout";
import OrderPlaced from "./OrderPlaced";
import OrderPlacing from "./OrderPlacing";
import OrderRejected from "./OrderRejected";

const Checkout = () => {

    const [placeOrder, setPlaceOrder] = useState() // undefined | 'placing' | # order

    const { register, handleSubmit, formState: { errors }, } = useForm({
        mode: 'onChange',
        defaultValues: {
            firstname: null,
            lastname: null,
            phone: null,
            address: null,
            country: null,
        },
    });
    const cartContext = useContext(CartContext)
    
    const handleCancelOrder = (e) => {
        e.preventDefault()
        cartContext.clearCart()
    }

    const handlePlaceOrder = async (data) => {
        setPlaceOrder({...placeOrder, status: 'placing'})
        const db = getFirestore();
        try {
            const newOrder = {
                buyer: data,
                cart: cartContext.getCart(),
                total: cartContext.getProductsTotalInCart()
            }
            const docRef = await addDoc(collection(db, "orders"), newOrder);
            console.log("Document written with ID: ", docRef.id);
            setPlaceOrder({...placeOrder, status: 'placed', order: { ...newOrder, id: docRef.id }})
          } catch (e) {
            console.error("Error adding document: ", e);
            setPlaceOrder({...placeOrder, status: 'rejected'})
          }
    }

    const inputs = [
        {
            name: 'firstname',
            validationObj: {
                required: { value: true, message: "Firstname is required" },
                pattern: { value: /^[A-Za-z]+$/i, message: "Firstname can only have letters"},
                minLength: { value: 3, message: 'Firstname must have at least 3 letters'}
            },
            placeholder: 'Luke',
        },
        {
            name: 'lastname',
            validationObj: {
                required: { value: true, message: "lastname is required" },
                pattern: { value: /^[A-Za-z]+$/i, message: "lastname can only have letters"},
                minLength: { value: 4, message: 'lastname must have at least 4 letters'}
            },
            placeholder: 'Skywalker',
        },
        {
            name: 'phone',
            validationObj: {
                required: { value: true, message: "Phone is required" },
                pattern: { value: /^[0-9]+$/i, message: "Phone can only have numbers"},
                minLength: { value: 6, message: 'Phone must have at least 6 numbers'}
            },
            placeholder: '985247',
        },
        {
            name: 'address',
            validationObj: {
                required: { value: true, message: "Address is required" },
                minLength: { value: 6, message: 'Address must have at least 6 characters'}
            },
            placeholder: '123 Main Street, New York',
        }
    ]

    return (
        <div className="checkout-form">
            <form onSubmit={handleSubmit(handlePlaceOrder)}>
                <p>To place the order</p>
                <h2>Please fill the information bellow</h2>
                {
                    inputs.map((el, key) => {
                        return <InputCheckout 
                            name={el.name} 
                            validationObj={el.validationObj}
                            errors={errors}
                            placeholder={el.placeholder}
                            register={register}
                            key={`input-check-${key}`}
                        />
                    })
                }
                
                
                <div className="form-control">
                    <label htmlFor="country">Country</label>
                    <select 
                        {...register("country", {
                            required: { value: true, message: "Please select your country" }
                        })}
                        className={errors.country ? 'invalid' : ''}
                        name="country" 
                        id="country"
                    >
                        <option value="">Select country</option>
                        {
                            countryListAllIsoData.map(country => (
                                    <option key={`country-${country.code}`} value={country.name}>{country.name}</option>
                            ))
                        }
                    </select>
                    {
                        errors.country && <div className="form-control__validation">
                            <small>{errors.country.message}</small>
                        </div>
                    }
                </div>


                <div className="form-control actions">
                    <button className="btn-outline" onClick={(e) => handleCancelOrder(e)}>Cancel order</button>
                    <button 
                        className="btn-default"
                        type="submit"
                        disabled={Object.keys(errors).length !== 0}
                        >Place order</button>
                </div>
            </form>

            <div className="">
                { placeOrder?.status === 'placing' && <OrderPlacing /> }
                { placeOrder?.status === 'placed' && <OrderPlaced order={placeOrder.order} /> }
                { placeOrder?.status === 'rejected' && <OrderRejected /> }
            </div>
        </div>
    )
}

export default Checkout
