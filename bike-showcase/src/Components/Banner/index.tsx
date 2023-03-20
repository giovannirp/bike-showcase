import banner from '../../assets/bike.png';
import { ContainerBanner } from './styles';

export function Banner() {
  return (
    <ContainerBanner>
      <img src={banner} alt="" />
    </ContainerBanner>
  )
}