import Digit from './Digit'
import Separator from './Separator'

function Clock() {
  return (
    <div className="flex flex-row justify-center font-thin uppercase text-center text-slate-600 text-5xl mb-10 mt-20">
      <Digit digit="15" />
      <Separator />
      <Digit digit="03" />
      <Separator />
      <Digit digit="00" />
    </div>
  )
}

export default Clock
