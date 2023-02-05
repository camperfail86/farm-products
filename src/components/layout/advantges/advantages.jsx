import Button from "../../ui/button/button.jsx"
import {Title, Ul, Center, Li} from './styles'
import FeatureCard from "../../ui/features/features"

export default function Advantages({features}) {
  return (
    <>
      <Title>Почему фермерские продукты лучше?</Title>
      <Ul>
        {features.map((feature) => (
          <Li key={feature.id}>
            <FeatureCard {...feature} />
          </Li>
        ))}
      </Ul>
      <Center>
        <Button />
      </Center>
    </>
  )
}