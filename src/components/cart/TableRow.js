import { Link } from "react-router-dom";

export default function TableRow(props) {
    const {closeIcon, productImage, productName, unitPrice, totalPrice} = props;

    return(
        <tr>
            <th scope="row">
                <i className={`bi ${closeIcon}`} />
            </th>
            <td>
                <img src={`${process.env.PUBLIC_URL}/${productImage}`} alt={productName} />
            </td>
            <td>
                <Link to="/product-details/1">{productName}</Link>
            </td>
            <td>{unitPrice}</td>
            <td>
                <input className="qty-text" type="text" min={1} max={99} name="quantity" defaultValue={1} />
            </td>
            <td>{totalPrice}</td>
        </tr>
    )
}