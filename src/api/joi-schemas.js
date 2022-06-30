import Joi from "joi";

export const IdSpec = Joi.alternatives().try(Joi.string(), Joi.object()).description("Valid ID");

export const UserSpec = Joi.object()
.keys({
    firstName: Joi.string().example("Sam").required(),
    lastName: Joi.string().example("Smith").required(),
    email: Joi.string().email().example("sam@smith.com").required(),
    password: Joi.string().example("fireonfire").required(),
    role: Joi.string().example("user").required(),
    _id: IdSpec,
    __v: Joi.number(),
})
.label("UserDetails");

export const UserSignUpSpec = Joi.object()
  .keys({
    firstName: Joi.string().example("Sam").required(),
    lastName: Joi.string().example("Smith").required(),
    email: Joi.string().email().example("sam@smith.com").required(),
    password: Joi.string().example("fireonfire").required(),
})
.label("UserSignUp");

export const UserCredentialSpec = Joi.object()
.keys({
    email: Joi.string().email().example("sam@smith.com").required(),
    password: Joi.string().example("fireonfire").required(),
})
.label("UserCredential");

export const AuthResponse = Joi.object() 
.keys({
        success: Joi.boolean().example(true),
        token: Joi.string(),
        isAdmin: Joi.boolean().example(false),
})
.label("AuthenticationResponse");

export const UserArray = Joi.array().items(UserSpec).label("UserArray");

export const CategorySpec = Joi.object() 
.keys({
        name: Joi.string().example("Dormitory").required(),
        type: Joi.string().example("dorm").required(),
        color: Joi.string().example("#db661d"),
        _id: IdSpec,
        __v: Joi.number(),
})
.label("CategoryDetail");

export const CategoriesArray = Joi.array().items(CategorySpec).label("CategoryArray");

export const PointDetailSpec = Joi.object() 
.keys({
        name: Joi.string().example("Gesslerheim").required(),
        street: Joi.string().example("Dr.-Gessler-Str.").required(),
        houseNumber: Joi.string().example("1-3a").required(),
        zipCode: Joi.string().example("93051").required(),
        city: Joi.string().example("Regensburg").required(),
        img: Joi.string().example("https://res.cloudinary.com/dhhiozzhl/image/upload/v1656523669/Gesslerheim_nntgtt.jpg").required(),
        description: Joi.string().example("The residential complex was built in 1977.").required(),
        lat: Joi.string().example("49.005").required(),
        lng: Joi.string().example("12.071").required(),
        category: IdSpec,
        _id: IdSpec,
        __v: Joi.number(),
})
.label("PointDetail");

export const PointDetailAddSpec = Joi.object() 
.keys({
        name: Joi.string().example("Gesslerheim").required(),
        street: Joi.string().example("Dr.-Gessler-Str.").required(),
        houseNumber: Joi.string().example("1-3a").required(),
        zipCode: Joi.string().example("93051").required(),
        city: Joi.string().example("Regensburg").required(),
        img: Joi.string().example("https://res.cloudinary.com/dhhiozzhl/image/upload/v1656523669/Gesslerheim_nntgtt.jpg").required(),
        description: Joi.string().example("The residential complex was built in 1977.").required(),
        lat: Joi.string().example("49.005").required(),
        lng: Joi.string().example("12.071").required(),
        category: IdSpec,
})
.label("PointDetailAdd");

export const PointsArray = Joi.array().items(PointDetailSpec).label("PointArray");
