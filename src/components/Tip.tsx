const tipOptions = [
  {
    id: 'tip-10',
    value: .10,
    label: '10%'
  },
  {
    id: 'tip-20',
    value: .20,
    label: '20%'
  },
  {
    id: 'tip-50',
    value: .50,
    label: '50%'
  },
];

type TipProps = {
  tip: number;
  setTip: (tip: number) => void;
};

const Tip = ({ tip, setTip }: TipProps) => {
  return (
    <div className="mb-4">
      <h2 className="mb-4 text-2xl font-extrabold">Propina</h2>

      <form>
        {
          tipOptions.map((option) =>
            <div
              key={option.id}
              className="flex items-center gap-2">
              <input
                type="radio"
                id={option.id}
                name="tip"
                value={option.value}
                checked={tip === option.value}
                onChange={() => setTip(option.value)}
                className="cursor-pointer" />

              <label
                htmlFor={option.id}>{option.label}
              </label>
            </div>
          )
        }
      </form>
    </div>
  )
}

export default Tip