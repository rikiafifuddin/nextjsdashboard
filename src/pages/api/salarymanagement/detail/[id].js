import db from '../../../../../libs/db';

export default async function handler(req, res) {
    if(req.method !== 'GET') return res.status(405).end();

    const { id } = req.query;
    const monthValue = new Date().getMonth(); //last month

    try{
      const salaryJoin = await db('salary').where( {employeeID: id} ).andWhereRaw(`EXTRACT(MONTH FROM salaryDate) = ?`, [monthValue]).first()

      const detailEmployee = await db('employee').where({employeeID: id}).first()
      let sumSalaryPlus = 0
      let sumSalaryMin = 0
      let sumSalary = 0

      sumSalaryPlus = salaryJoin?.insentif + salaryJoin?.baseSalary + salaryJoin?.OT + salaryJoin?.OTBKOorLP + salaryJoin?.LPBL + salaryJoin?.salaryDifferencePlus + salaryJoin?.OTLalu ;
      sumSalaryMin = salaryJoin?.absensi + salaryJoin?.salaryDifferenceMin + salaryJoin?.BPJSTK + salaryJoin?.BPJSKES + salaryJoin?.PPH21 + salaryJoin?.other1 + salaryJoin?.other2 + salaryJoin?.other3;
      sumSalary = sumSalaryPlus - sumSalaryMin

      salaryJoin.sumSalaryPlus = sumSalaryPlus;
      salaryJoin.sumSalaryMin = sumSalaryMin;
      salaryJoin.sumSalary = sumSalary;

      salaryJoin.fullName = detailEmployee?.fullName;
      salaryJoin.perusahaan = detailEmployee?.perusahaan;
      salaryJoin.jobSkill = detailEmployee?.jobSkill;
      salaryJoin.bpjsKesehatan = detailEmployee?.bpjsKesehatan;
      salaryJoin.bpjsTK = detailEmployee?.bpjsTK;
      salaryJoin.noRekening = detailEmployee?.noRekening;

      res.status(200);
      res.json({
          message: 'Get Detail Salary with join',
          data: salaryJoin
      });
    }catch (err){
        console.log(err)
        res.status(500);
        res.json({
          message: 'Failed Get Detail Salary with join',
          data: {}
        })
      }

}
