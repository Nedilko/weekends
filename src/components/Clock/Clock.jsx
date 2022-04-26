import Digitblock from './Digitblock'
import Separator from './Separator'

function Clock() {
  return (
    <div className="flex flex-row justify-around items-center text-center mb-5 mt-5 mx-10">
      <Digitblock label="days" digit="3" />
      <Separator />

      <Digitblock label="hours" digit="15" />
      <Separator />

      <Digitblock label="minutes" digit="03" />
      <Separator />

      <Digitblock label="seconds" digit="00" />
    </div>
  )
}

export default Clock
