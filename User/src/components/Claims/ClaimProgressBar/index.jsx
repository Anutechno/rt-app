import ProgressBar from "./ClaimProgressBar"

import "./claimStatus.scss"

const ClaimStatus = (props) => {
  const { position } = props

  return (
    <div className="claim-status">
      <p><label>Carrier:</label><span>USPS</span></p>
      <p><label>Tracing nuber:</label><span>GB12345678901234567890</span></p>
      <ProgressBar position={position}/>
      <p className="show-more">Show more<i class="bi bi-chevron-down"></i></p>
    </div>
  )
}

export default ClaimStatus