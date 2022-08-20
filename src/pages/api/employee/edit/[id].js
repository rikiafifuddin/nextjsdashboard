import db from '../../../../../libs/db';
import * as dayjs from 'dayjs'

export default async function handler(req, res) {
    dayjs().format()
    if(req.method !== 'PUT') return res.status(405).end();

    const {
      id,
      fullName,
      email,
      identityID,
      employeeID,
      perusahaan,
      jobSkill,
      jobType,
      joinDate,
      placeofBirth,
      birthDate,
      gender,
      religion,
      phoneNumber,
      noRekening,
      education,
      motherName,
      streetAddress,
      kelurahanAddress,
      kecamatanAddress,
      kotaAddress,
      dInsurance,
      bpjsKesehatan,
      jkkother,
      noteinsurance
     } = req.body;

    const formatJoindate = dayjs(joinDate).format('YYYY-MM-DD')
    const formatBirthDate = dayjs(birthDate).format('YYYY-MM-DD')

    try{
      const editEmployee = await db('employee')
        .where({ id })
        .update({
          fullName,
          email,
          identityID,
          employeeID,
          perusahaan,
          jobSkill,
          jobType,
          joinDate: formatJoindate,
          placeofBirth,
          birthDate: formatBirthDate,
          gender,
          religion,
          phoneNumber,
          noRekening,
          education,
          motherName,
          streetAddress,
          kelurahanAddress,
          kecamatanAddress,
          kotaAddress,
          dInsurance,
          bpjsKesehatan,
          jkkother,
          noteinsurance
        });

      if(editEmployee) {
        const detailEmployee = await db('employee').where({ id }).first();

        res.status(200);
        res.json({
            message: 'Success Edit Employee',
            data: detailEmployee
        });

      }

    }catch (err){
        console.log(err)
        res.status(500);
        res.json({
          message: 'Failed Edit Employee',
          data: {}
        })
      }

}
