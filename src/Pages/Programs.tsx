
import EntrepreneurshipProgramInfo from '../Section/Programs/EntrepreneurshipProgramInfo'
import FoundationInfo from '../Section/Programs/FoundationInfo'
import ProgramInfo from '../Section/Programs/PatentTrack'
// import ProgramCards from '../Section/Programs/ProgramCards'
import ResearchInfo from '../Section/Programs/ResearchTrack'

const Programs = () => {
  return (
    <div>
      
      {/* <ProgramCards /> */}
      <ProgramInfo/>
      <ResearchInfo/>
      <EntrepreneurshipProgramInfo/>
      <FoundationInfo/>
    </div>
  )
}

export default Programs