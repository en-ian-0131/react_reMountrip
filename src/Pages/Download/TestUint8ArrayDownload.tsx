export default function TestUint8ArrayDownload() {
  const numberArray = [72, 101, 108, 108, 111];
  const uint8Array = new Uint8Array(numberArray);
  console.log("uint8Array:", uint8Array);

  const textBlob2 = new Blob([uint8Array], {
    type: "application/octet-stream",
  });
  const BlobURL = URL.createObjectURL(textBlob2);

  const handleClick = () => {
    const ALink = document.createElement("a");
    ALink.href = BlobURL;
    ALink.download = "text.xls";
    ALink.click();
  };

  return (
    <div className="container">
      <button
      className="btn btn-primary"
        onClick={() => {
          handleClick();
        }}
      >
        Download
      </button>
    </div>
  );
}
