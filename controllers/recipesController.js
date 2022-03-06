import Recipe from '../models/Recipe.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, NotFoundError } from '../errors/index.js';
// import checkPermissions from '../utils/checkPermissions.js';
import mongoose from 'mongoose';
// import { rsort } from 'semver';
// import moment from 'moment';

//'/api/v1/recipes' -- .post(createRecipe)
const createRecipe = async (req, res) => {
   // prettier-ignore
   const {oilsList, problemsList,title,desc} = req.body;

   if (!title || oilsList.length === 0 || problemsList.length === 0 || !desc) {
      throw new BadRequestError('Favor proveer todos los valores');
   }

   req.body.createdBy = req.user.userId;

   // OJO q estoy pasando todo el req.body
   const recipe = await Recipe.create(req.body);

   res.status(StatusCodes.CREATED).json({ recipe });
};

//'/api/v1/recipes' -- .route('/:id').delete(deleteRecipe)
const deleteRecipe = async (req, res) => {
   res.send('<h1>delete Recipe</h1>');
   // const { id: jobId } = req.params;

   // const job = await Job.findOne({ _id: jobId });
   // if (!job) {
   //    throw new CustomError.NotFoundError(`No job with id : ${jobId}`);
   // }

   // checkPermissions(req.user, job.createdBy);

   // await job.remove();

   // res.status(StatusCodes.OK).json({ msg: 'Success! Job removed' });
};

// al no poner el await se obtiene solo el query ( en este caso en la variable result ) , al q despues se le puede agregar los sort'ssss
// cuando se ponga 'all' lo q quiero es q no se filtre en relación a ese, xeso para ese no se va a poner en el queryObject. ( al poner 'all' lo q hace es NO buscar con ese filtro )
//status, type y sort SIEMPRE tienen algo x default, NO pueden estar vacios
// si no fueran a estar presentes podria poner el if de la sig forma:
//if ( status && status !== 'all') {...
// para q se agrege solo si no es undefined
//'/api/v1/recipes' --  .get(getAllRecipes)
// ▦▦▦▦▦▦▦▦ FILTROS ▦▦▦▦▦▦▦▦
const getAllRecipes = async (req, res) => {
   const recipes = await Recipe.find();

   res.status(StatusCodes.OK).json({
      totalRecipes: recipes.length,
      numOfPages: 1,
      recipes,
   });
   // const { search, status, jobType, sort } = req.query;
   // const queryObject = {
   //    createdBy: req.user.userId,
   // };
   // if (status !== 'all') {
   //    queryObject.status = status;
   // }
   // if (jobType !== 'all') {
   //    queryObject.jobType = jobType;
   // }
   // // FILTRA POSITION
   // if (search) {
   //    queryObject.position = { $regex: search, $options: 'i' };
   // }
   // // SIN AWAIT
   // let result = Job.find(queryObject);
   // // chain sort conditions
   // if (sort === 'latest') {
   //    result = result.sort('-createdAt');
   // }
   // if (sort === 'oldest') {
   //    result = result.sort('createdAt');
   // }
   // if (sort === 'a-z') {
   //    result = result.sort('position');
   // }
   // if (sort === 'z-a') {
   //    result = result.sort('-position');
   // }
   // // setup pagination
   // const page = Number(req.query.page) || 1;
   // const limit = Number(req.query.limit) || 10;
   // const skip = (page - 1) * limit;
   // result = result.skip(skip).limit(limit);
   // // 75
   // // 10 10 10 10 10 10 10 5
   // const jobs = await result;
   // const totalJobs = await Job.countDocuments(queryObject);
   // const numOfPages = Math.ceil(totalJobs / limit);
   // res.status(StatusCodes.OK).json({
   //    totalJobs,
   //    numOfPages,
   //    jobs,
   // });
};

//'/api/v1/recipes' -- .route('/:id').patch(updateRecipe)
const updateRecipe = async (req, res) => {
   res.send('<h1>update Recipe</h1>');
   // const { id: jobId } = req.params;
   // const { company, position } = req.body;

   // // como sea lo reviso en el front
   // if (!company || !position) {
   //    throw new BadRequestError('Please Provide All Values');
   // }

   // const job = await Job.findOne({ _id: jobId });
   // if (!job) {
   //    throw new NotFoundError(`No job with id ${jobId}`);
   // }

   // checkPermissions(req.user, job.createdBy);

   // // tecnicamente NO lo necesito en el front como respuesta, el updatedJob
   // const updatedJob = await Job.findOneAndUpdate({ _id: jobId }, req.body, {
   //    new: true,
   //    runValidators: true,
   // });

   // res.status(StatusCodes.OK).json({ updatedJob });
};

//'/api/v1/recipes' -- route('/stats').get(showStats);
const showStats = async (req, res) => {
   res.send('<h1> show stats</h1>');

   // en "models" reviews" del e-commerce-api, tengo la explicacion de como crear los pipelines para calculateAverageRating

   // let stats = await Job.aggregate([
   //    { $match: { createdBy: mongoose.Types.ObjectId(req.user.userId) } },
   //    { $group: { _id: '$status', count: { $sum: 1 } } },
   // ]);

   // // console.log(stats);
   // //  [{ _id: 'pending', count: 37 },{ _id: 'declined', count: 46 },{ _id: 'interview', count: 37 }]

   // // solo para cambiar el formato del object
   // stats = stats.reduce((acc, curr) => {
   //    const { _id: title, count } = curr;
   //    acc[title] = count;

   //    return acc;
   // }, {});

   // // console.log(stats);
   // //  { pending: 37, declined: 46, interview: 37 }

   // const defaultStats = {
   //    pending: stats.pending || 0,
   //    interview: stats.interview || 0,
   //    declined: stats.declined || 0,
   // };

   // // let monthlyApplications = [];

   // let monthlyApplications = await Job.aggregate([
   //    { $match: { createdBy: mongoose.Types.ObjectId(req.user.userId) } },
   //    {
   //       $group: {
   //          _id: {
   //             year: { $year: '$createdAt' },
   //             month: { $month: '$createdAt' },
   //          },
   //          count: { $sum: 1 },
   //       },
   //    },
   //    { $sort: { '_id.year': -1, '_id.month': -1 } },
   //    { $limit: 6 },
   // ]);
   // // // console.log(monthlyApplications);
   // // // [ { _id: { year: 2022, month: 2 }, count: 5 },...]

   // monthlyApplications = monthlyApplications
   //    .map(item => {
   //       const {
   //          _id: { year, month },
   //          count,
   //       } = item;

   //       const date = moment()
   //          .month(month - 1)
   //          .year(year)
   //          .format('MMM Y');

   //       return { date, count };
   //    })
   //    .reverse();
   // // // console.log(monthlyApplications);
   // // // [{ date: 'Sep 2021', count: 3 }, ... ]

   // res.status(StatusCodes.OK).json({ defaultStats, monthlyApplications });
};

export { createRecipe, deleteRecipe, getAllRecipes, updateRecipe, showStats };
