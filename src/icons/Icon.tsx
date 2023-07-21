import icons from './icons.svg'
import styles from './Icon.module.css'

type IconWrapperProps = {
  name: string
  color?: string
}

type IconProps = {
  color?: string
}

const Icon = ({ name, color }: IconWrapperProps) => {
  const colorClass = color ? styles[color] : ''
  return (
    <div className={styles.icon}>
      <svg viewBox='0 0 24 24' className={colorClass}>
        <use href={`${icons}#${name}`} />
      </svg>
    </div>
  )
}

const IconReact = ({ color }: IconProps) => <Icon name='react' color={color} />
const IconAccount = ({ color }: IconProps) => <Icon name='account' color={color} />

export { IconReact, IconAccount }
