import Avaliacao from "../Avaliacao";
import data from '../../assets/data.json'

export default function GrupoAvaliacao() {
    return (
        <div style={{ display: 'flex', gap: 16 }}>
            <Avaliacao name={data[0].name} imgUrl={data[0].imgUrl} title={data[0].title} description={data[0].description} />
            <Avaliacao name={data[1].name} imgUrl={data[1].imgUrl} title={data[1].title} description={data[1].description} />
            <Avaliacao name={data[2].name} imgUrl={data[2].imgUrl} title={data[2].title} description={data[2].description} />
        </div>
    )
}