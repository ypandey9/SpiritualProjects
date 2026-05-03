const TYPE_LABELS = {
  doha: "दोहा",
  chaupai: "चौपाई",
  chhand: "छंद",
  shlok: "श्लोक",
  soratha: "सोरठा"
};

export default function VerseCard({ id, type, text, arth, english }) {
  const lines = Array.isArray(text) ? text : [text];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md mb-6 border border-orange-100">

      <h3 className="text-sm text-orange-500 font-semibold mb-2">
        {TYPE_LABELS[type]} {id}
      </h3>

      <div className="text-lg text-center leading-relaxed font-medium mb-4">
        {lines.map((line, index) => (
          <p key={index} className="mb-1">{line}</p>
        ))}
      </div>

      <div className="my-4 border-t"></div>

      <p className="text-gray-700 leading-relaxed text-justify">
        {arth}
      </p>

      {english && (
        <>
          <div className="border-t my-4"></div>
          <h4 className="text-sm font-semibold text-gray-500 mb-1">
            English Meaning
          </h4>
          <p className="text-gray-600 italic leading-relaxed">
            {english}
          </p>
        </>
      )}
    </div>
  );
}