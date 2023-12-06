import { classNames } from 'shared/lib/ClassNames/ClassNames'
import { Loader } from 'shared/ui/Loader/Loader'
import "./PageLoader.scss"

interface PageLoaderProps {
    className?:string
}

export const PageLoader = ({className}: PageLoaderProps) => {
  return (
    <div className={classNames('PageLoader',{},[className])}>
      <Loader/>
    </div>
  )
}